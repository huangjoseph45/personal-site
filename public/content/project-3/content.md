---
title: News Cap Fact Checker
date: Feb. 2025
tags: [react, fastAPI, twelveLabs, exa, cedarOS, docker, tailwindCSS, RapidAPI]
blurb: An AI native video player and fact checking platform that empowers users to verify information directly from video content, cross referencing claims with credible sources in real time.
link: https://devpost.com/software/news-cap-a-fact-checker
---

News Cap is a modern fact checking platform designed to help users navigate the flood of information on social media. By combining automated research tools, AI driven video analysis, and intuitive design, the app makes it possible to verify claims right where people consume content, within videos themselves.

## Inspiration

People are increasingly getting their news from social platforms, where fact checking is often opaque, limited, or one sided. Our goal was to build something that protects free speech while promoting a diversity of perspectives backed by credible research.

## What It Does

News Cap is an AI native video player that analyzes YouTube videos for factual claims. With an agentic workflow, it identifies key assertions, researches them using trusted sources, and provides users with verification results alongside the video. Users can also ask follow up questions for deeper exploration of the topics.

## How We Built It

- Video Processing: YouTube links are ingested, videos are downloaded, and then embedded using Twelve Labs for analysis
- Fact Detection: Clips conveying factual claims are extracted and summarized
- Research Workflow: Summaries are passed to Exa, which retrieves supporting or contradicting evidence from real sources
- Verification: Findings are compiled into concise results displayed next to the video in the frontend
- Architecture: The system runs on a microservices design
  - Frontend (React 19 + Vite + TailwindCSS + Framer Motion): Provides a responsive and modern interface with routing for video analysis
  - Backend (FastAPI + Python + Uvicorn): Handles fact checking workflows and API logic
  - Docker Compose: Enables containerized deployment for both frontend and backend

## Challenges We Ran Into

- Learning the broad and powerful Twelve Labs API, and figuring out how to architect our workflow around it
- Coordinating 3 microservices and a frontend in parallel development while ensuring integration went smoothly

## Accomplishments We Are Proud Of

- Successfully building an ambitious end to end fact checking system in a short timeframe
- Delivering a polished product that integrates cutting edge AI research tools
- Exploring Cedar OS and designing workflows that highlight advanced AI driven research

## What We Learned

- How to integrate Twelve Labs for video understanding, Exa for research, and CedarCopilot for LLM backed insights
- Advanced design patterns in FastAPI for scalable research workflows
- The importance of modular containerized architectures when working with multiple services

## What Is Next

- Expanding fact checking algorithms to handle more diverse content
- Adding database integration for storing claims and research history
- Enhancing video navigation and user interactivity
- Exploring partnerships with platforms to make fact checking more accessible to everyday viewers

With over 900 participants and 278 projects at the hackathon, News Cap stood out by combining Twelve Labs Pegasus powered video analysis with real time fact checking, pushing the boundaries of how AI can combat misinformation.
