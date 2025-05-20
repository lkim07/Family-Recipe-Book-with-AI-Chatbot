# Family-Recipe-Book-with-AI-Chatbot

Frontend ↔ Backend Integration

- Auth: Use fetch('/auth/signup') & fetch('/auth/login'), save JWT in localStorage.

- List Recipes: GET /recipes, display on homepage.

- View Recipe: GET /recipes/{id}, display details and comments from GET /recipes/{id}/comments.

- Add Recipe: POST /recipes, then navigate to its detail page.

- Comment: POST /recipes/{id}/comments with { text }.

- Chatbot: Use OpenAI via /api/chatbot or directly call your Express askAI helper.
