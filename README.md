
# 🔎 SearchIT

A full-stack **technical search engine** that crawls trusted developer resources, indexes their content, and provides fast search through a modern interface.

## ✨ Features

- 🌐 Web crawling with Jsoup
- 🔎 PostgreSQL Full-Text Search
- ⚡ Spring Boot REST APIs
- 💡 Search suggestions
- 📄 Search results with title, URL & snippets
- 🚀 Concurrent website crawling
- 🎨 React + Tailwind UI
- ✨ Animated particle background

## 🛠️ Tech Stack

**Frontend:** React, Vite, Tailwind CSS  
**Backend:** Java, Spring Boot, Spring Data JPA, Jsoup  
**Database:** PostgreSQL  
**Search:** `tsvector` + GIN Index

## 🏗️ Architecture

```text
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
