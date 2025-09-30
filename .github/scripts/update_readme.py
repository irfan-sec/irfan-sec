#!/usr/bin/env python3
"""
Dynamic README updater for irfan-sec profile
Updates various sections with live data and dynamic content
"""

import requests
import json
import re
from datetime import datetime, timezone
import feedparser
import os

def get_github_stats(username):
    """Fetch GitHub statistics"""
    try:
        # Get user data
        user_response = requests.get(f'https://api.github.com/users/{username}', timeout=10)
        if user_response.status_code != 200:
            print(f"GitHub API returned status {user_response.status_code}")
            return None
            
        user_data = user_response.json()
        
        # Get repositories
        repos_response = requests.get(f'https://api.github.com/users/{username}/repos?sort=updated&per_page=100', timeout=10)
        if repos_response.status_code != 200:
            print(f"GitHub repos API returned status {repos_response.status_code}")
            return None
            
        repos_data = repos_response.json()
        
        # Calculate stats
        total_stars = sum(repo.get('stargazers_count', 0) for repo in repos_data)
        total_forks = sum(repo.get('forks_count', 0) for repo in repos_data)
        
        return {
            'followers': user_data.get('followers', 0),
            'following': user_data.get('following', 0),
            'public_repos': user_data.get('public_repos', 0),
            'total_stars': total_stars,
            'total_forks': total_forks
        }
    except Exception as e:
        print(f"Error fetching GitHub stats: {e}")
        return None

def get_recent_activity(username):
    """Fetch recent GitHub activity"""
    try:
        events_response = requests.get(f'https://api.github.com/users/{username}/events/public?per_page=5', timeout=10)
        if events_response.status_code != 200:
            print(f"GitHub events API returned status {events_response.status_code}")
            return []
            
        events = events_response.json()
        
        activities = []
        for event in events[:3]:  # Get last 3 activities
            event_type = event.get('type', '')
            repo_name = event.get('repo', {}).get('name', '')
            created_at = event.get('created_at', '')
            
            if event_type == 'PushEvent':
                commits = len(event.get('payload', {}).get('commits', []))
                activity = f"🚀 Pushed {commits} commit(s) to [{repo_name}](https://github.com/{repo_name})"
            elif event_type == 'CreateEvent':
                activity = f"✨ Created new repository [{repo_name}](https://github.com/{repo_name})"
            elif event_type == 'ForkEvent':
                activity = f"🍴 Forked [{repo_name}](https://github.com/{repo_name})"
            elif event_type == 'IssuesEvent':
                action = event.get('payload', {}).get('action', '')
                activity = f"🐛 {action.title()} issue in [{repo_name}](https://github.com/{repo_name})"
            else:
                continue
                
            activities.append(activity)
        
        return activities
    except Exception as e:
        print(f"Error fetching recent activity: {e}")
        return []

def get_blog_posts():
    """Fetch latest blog posts (placeholder - replace with actual blog feed)"""
    try:
        # This is a placeholder - replace with actual blog RSS feed
        # feed = feedparser.parse('https://your-blog-url.com/feed.xml')
        # For now, return static content
        return [
            "📝 [Advanced SQL Injection Techniques](https://cyberlearn.systems/blog/sql-injection)",
            "🔐 [OSCP Preparation Guide 2024](https://cyberlearn.systems/blog/oscp-guide)",
            "🎯 [Red Team Tactics & Techniques](https://cyberlearn.systems/blog/red-team)"
        ]
    except Exception as e:
        print(f"Error fetching blog posts: {e}")
        return []

def get_current_time_info():
    """Get current time and day info"""
    now = datetime.now(timezone.utc)
    day_name = now.strftime('%A')
    time_str = now.strftime('%H:%M UTC')
    
    # Time-based greeting
    hour = now.hour
    if 5 <= hour < 12:
        greeting = "🌅 Good morning"
        activity = "Starting the day with vulnerability research"
    elif 12 <= hour < 17:
        greeting = "☀️ Good afternoon"
        activity = "Deep in penetration testing mode"
    elif 17 <= hour < 21:
        greeting = "🌆 Good evening"
        activity = "Working on security automation"
    else:
        greeting = "🌙 Good night"
        activity = "Bug bounty hunting in progress"
    
    return {
        'greeting': greeting,
        'activity': activity,
        'day': day_name,
        'time': time_str
    }

def generate_profile_quest():
    """Generate a random profile quest/challenge"""
    quests = [
        "🎯 Find the hidden CTF flag in my pinned repositories!",
        "🔍 Discover the secret message in my commit history!",
        "🧩 Solve the cipher hidden in my bio descriptions!",
        "🚩 Locate the easter egg in my project READMEs!",
        "🔐 Decode the Base64 message in my security tools!"
    ]
    
    import random
    return random.choice(quests)

def update_readme():
    """Main function to update README.md with dynamic content"""
    
    # Read current README
    with open('README.md', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Get dynamic data
    github_stats = get_github_stats('irfan-sec')
    recent_activity = get_recent_activity('irfan-sec')
    blog_posts = get_blog_posts()
    time_info = get_current_time_info()
    quest = generate_profile_quest()
    
    # Update last updated timestamp
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
    
    # Dynamic status section with time-based greeting
    dynamic_status = f"""
### 🕒 Live Status
> {time_info['greeting']} - Currently {time_info['activity']}  
> 📅 **{time_info['day']}** | ⏰ **{time_info['time']}**  
> 🔄 *Last updated: {timestamp}*
"""
    
    # Recent activity section
    activity_section = """
### 🔥 Recent Activity
"""
    for activity in recent_activity:
        activity_section += f"- {activity}\n"
    
    if not recent_activity:
        activity_section += "- 🔄 Loading latest activities...\n"
    
    # Latest blog posts section
    blog_section = """
### 📚 Latest Blog Posts
"""
    for post in blog_posts:
        blog_section += f"- {post}\n"
    
    # Profile quest section
    quest_section = f"""
### 🎮 Profile Quest
> **Daily Challenge:** {quest}  
> *Complete the challenge and tag me on social media to earn recognition!*
"""
    
    # Add dynamic sections to README
    # Find the position after the pinned gists section to insert dynamic content
    gists_end = content.find('</div>\n\n### 🎖️ Current Status & Goals')
    if gists_end != -1:
        insert_pos = gists_end + 7  # After the closing </div>
    else:
        # Fallback: find after the python code block
        code_end = content.find('```\n\n### 🎖️ Current Status & Goals')
        if code_end != -1:
            insert_pos = code_end + 3
        else:
            print("❌ Could not find insertion point in README.md")
            return
    
    dynamic_content = f"""

{dynamic_status}
{activity_section}
{blog_section}
{quest_section}
---
"""
    
    # Insert the dynamic content
    new_content = content[:insert_pos] + dynamic_content + content[insert_pos:]
    
    # Update GitHub stats if available
    if github_stats:
        # Update follower count in the badges section
        new_content = re.sub(
            r'(https://img\.shields\.io/github/followers/irfan-sec\?label=Followers&style=for-the-badge&color=blue)',
            f'https://img.shields.io/badge/Followers-{github_stats["followers"]}-blue?style=for-the-badge',
            new_content
        )
    
    # Write updated content
    with open('README.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("✅ README.md updated successfully!")
    print(f"📊 Stats: {github_stats}")
    print(f"🎯 Quest: {quest}")

if __name__ == "__main__":
    update_readme()