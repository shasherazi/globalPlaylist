# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

import os
from firebase_functions import https_fn, options
from firebase_admin import initialize_app
import spotipy
from spotipy.oauth2 import SpotifyOAuth

initialize_app()

def add_track_to_playlist(spotify, playlist_id, track):
    spotify.playlist_add_items(playlist_id, [track])


def is_in_playlist(spotify, playlist_id, track):
    playlist = spotify.playlist(playlist_id)
    track_id = spotify.track(track)['id']
    tracks = playlist['tracks']['items']
    for track in tracks:
        if track['track']['id'] == track_id:
            return True
    return False

def is_valid_track(spotify, track):
    try:
        track = spotify.track(track)
        return True
    except:
        return False

# @https_fn.on_request(max_instances=10,
#                      secrets=["CLIENT_ID", "CLIENT_SECRET"],
#                      cors=True
#                      )
# def add_track(req: https_fn.Request) -> https_fn.Response:
#     client_id = os.environ.get("CLIENT_ID")
#     client_secret = os.environ.get("CLIENT_SECRET")
#     scope = 'playlist-modify-public'
#     redirect_uri = 'http://localhost:3000'
#     playlist_id = "5guHkOV7FI54QTX9JspOsY"
#     track = req.args.get('track')
#     spotify = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri))
#
#     if track is None:
#         return https_fn.Response("No track provided\n")
#
#     add_track_to_playlist(spotify, playlist_id, track)
#     track = spotify.track(track)['name']
#     playlist = spotify.playlist(playlist_id)['name']
#     return https_fn.Response(f"Added {track} to playlist {playlist}\n")

@https_fn.on_request(max_instances=10,
                     secrets=["CLIENT_ID", "CLIENT_SECRET"],
                     )
def add_track(req: https_fn.Request) -> https_fn.Response:
    client_id = os.environ.get("CLIENT_ID")
    client_secret = os.environ.get("CLIENT_SECRET")
    scope = 'playlist-modify-public'
    redirect_uri = 'http://localhost:3000'
    playlist_id = "5guHkOV7FI54QTX9JspOsY"
    track = req.args.get('track')
    spotify = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri))

    response = https_fn.Response()
    response.headers['Access-Control-Allow-Origin'] = '*'  # Allow all origins

    if track is None:
        response.response = "No track provided"
    else:
        if not is_valid_track(spotify, track):
            response.response = "Invalid track"
        elif is_in_playlist(spotify, playlist_id, track):
            response.response = "Track already in playlist"
        else:
            add_track_to_playlist(spotify, playlist_id, track)
            track = spotify.track(track)['name']
            playlist = spotify.playlist(playlist_id)['name']
            response.response = f"Added {track} to playlist {playlist}\n"

    return response
