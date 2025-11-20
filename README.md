Tools:

React Native (Expo Go) — for cross-platform iOS/Android app.
Axios or Fetch API - to create pull requests to the API
MusicBrainz + Cover Art Archive - music database API
SQLite or AsyncStorage to store user favorites locally - store favorites locally
Workflow:

User searches -artist name- → your app sends a request to MusicBrainz API.
You get a list of albums + MBIDs (MusicBrainz IDs).
Use those IDs to get cover art from the Cover Art Archive API.
Display the image URLs in your app.
Dataflow: React Native app → (search term) → MusicBrainz API → get album list + IDs → Cover Art Archive API → get image URLs → display albums in FlatList with title + cover
