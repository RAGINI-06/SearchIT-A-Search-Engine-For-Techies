🔎 SearchIT

A full-stack technical search engine that crawls trusted developer resources, indexes their content, and lets users search everything through one modern interface.

✨ Features
🌐 Web crawling with Jsoup
🔎 PostgreSQL Full-Text Search
⚡ Spring Boot REST APIs
💡 Search suggestions
📄 Search results with title, URL & snippets
🚀 Concurrent website crawling
🎨 React + Tailwind modern UI
✨ Animated particle background
🛠️ Tech Stack

Frontend: React, Vite, Tailwind CSS
Backend: Java, Spring Boot, Spring Data JPA, Jsoup
Database: PostgreSQL
Search: PostgreSQL tsvector + GIN Index

🏗️ Architecture
React Frontend
      ↓
Spring Boot REST API
      ↓
Search Service
      ↓
PostgreSQL
      ↑
Jsoup Web Crawler
      ↑
Technical Websites
🔍 Search API
GET /api/search?keyword=spring

Search with pagination:

GET /api/search?keyword=spring&page=0&size=10

Suggestions:

GET /api/search/suggestions?query=spri
🕷️ Crawler

Start crawling configured websites:

POST /api/crawler/start

The crawler extracts:

Page title
Description
Headings
Content
URL
Website
Word count

and stores the indexed pages in PostgreSQL.

▶️ Run Locally
Backend
cd backend
mvn spring-boot:run
Frontend
cd frontend
npm install
npm run dev

Make sure PostgreSQL is running and the database configuration is set in the Spring Boot application.

🚧 Future Improvements
⚡ Redis caching
📊 Better search ranking
🧠 Semantic/vector search
📜 Search history
🔄 Scheduled crawling
☁️ Cloud deployment
👩‍💻 Author

Ragini Nishad

B.Tech CSE | Java & Spring Boot Backend Developer

SearchIT — Search technical knowledge from one place.
