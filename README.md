# Vinyl-Vault
-------------------
Tools: 
1. React Native (Expo Go) — for cross-platform iOS/Android app.
2. Axios or Fetch API - to create pull requests to the API
3. MusicBrainz + Cover Art Archive - music database API
4. SQLite or AsyncStorage to store user favorites locally - store favorites locally

Workflow:
1. User searches -artist name- → your app sends a request to MusicBrainz API.
2. You get a list of albums + MBIDs (MusicBrainz IDs).
3. Use those IDs to get cover art from the Cover Art Archive API.
4. Display the image URLs in your app.

Dataflow: 
React Native app → (search term) → MusicBrainz API
→ get album list + IDs → Cover Art Archive API → get image URLs
→ display albums in FlatList with title + cover
