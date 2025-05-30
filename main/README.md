# Portfolio Website

Welcome to my portfolio website! Here you'll find information about my projects, skills, and achievements in web development and programming. This site showcases my work, including frontend and backend projects, coding challenges, and contributions to open source.

Feel free to explore the repository, check out my code samples, and connect with me for collaboration or opportunities.

---

## Table of Contents

- [About Me](#about-me)
- [Skills](#skills)
- [Coding Challenges](#coding-challenges)
- [Contact](#contact)
- [Leetcode Stats](#leetcode-stats)
- [How to Use](#how-to-use)
- [License](#license)

---

## About Me

Hi! I'm Dinesh Sutihar, a passionate full-stack developer with experience in building scalable web applications. My interests include frontend technologies, backend development, cloud computing, and competitive programming.

- **Education:** B.Tech in Computer Science and Engineering.
- **Interests:** Software Development, Cloud Computing, Web Development, Full Stack Development, Open Source, UI/UX , Competitive Programming, Data Structures, and Algorithms.

---

## Skills

### Frontend

- HTML5, CSS3, JavaScript (ES6+)
- React.js, Next.js, Redux
- Tailwind CSS, Bootstrap, Material UI, etc.
- Responsive Design, Accessibility

### Backend

- Node.js, Express.js
- Python (Flask, Django)
- Java (Spring Boot)
- REST APIs, GraphQL
- Authentication & Authorization

### Database

- MongoDB, PostgreSQL, MySQL
- Firebase, Redis

### DevOps & Tools

- Git & GitHub
- Docker, CI/CD
- AWS, Netlify, Vercel, Azure

### Other

- Data Structures & Algorithms
- Competitive Programming
- Unit Testing (Jest)
- Agile Methodologies
- Version Control (Git)

---

## Coding Challenges

I actively participate in coding challenges on platforms like Leetcode, Codeforces, and HackerRank.

- **Leetcode:** 1000+ problems solved
- **Codeforces:** Specialist (Rating: 1500+)
- **HackerRank:** Gold Badge in Algorithms

### Recent Achievements

- Top 10% in Leetcode Weekly Contests
- Codeforces Round #700: Ranked 1200
- HackerRank 30 Days of Code: Completed

---

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes
4. Open a pull request

---

## Contact

Feel free to reach out for collaboration, freelance opportunities, or just to say hi!

- **Email:** dineshsutihar@gmail.com
- **LinkedIn:** [linkedin.com/in/dineshsutihar](https://linkedin.com/in/dineshsutihar)
- **Twitter:** [@dineshsutihar](https://twitter.com/dineshsutihar)
- **Website:** [dineshsutihar.github.io](https://dineshsutihar.github.io)

---

<details>
  <summary><strong>Leetcode Stats (click to expand)</strong></summary>

You can fetch my latest Leetcode stats using the following GraphQL query:

```graphql
https://leetcode.com/graphql?query=query
{
  userContestRanking(username:  "dineshsutihar")
  {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
  }
  userContestRankingHistory(username: "dineshsutihar")
  {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest
    {
      title
      startTime
    }
  }
}
```

### Example Response

```json
{
  "data": {
    "userContestRanking": {
      "attendedContestsCount": 60,
      "rating": 1745.11,
      "globalRanking": 32151,
      "totalParticipants": 350123,
      "topPercentage": 9.59
    },
    "userContestRankingHistory": [
      {
        "attended": false,
        "trendDirection": "NONE",
        "problemsSolved": 0,
        "totalProblems": 3,
        "finishTimeInSeconds": 0,
        "rating": 1500.0,
        "ranking": 0,
        "contest": {
          "title": "Weekly Contest 2",
          "startTime": 1472347800
        }
      },
      {
        "attended": false,
        "trendDirection": "NONE",
        "problemsSolved": 0,
        "totalProblems": 4,
        "finishTimeInSeconds": 0,
        "rating": 1500.0,
        "ranking": 0,
        "contest": {
          "title": "Weekly Contest 3",
          "startTime": 1472990400
        }
      }
    ]
  }
}
```

### Fetching Leetcode Data with Python

```python
import requests

def fetch_leetcode_data(username):
    query = """
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          aboutMe
          userAvatar
          ranking
          reputation
          skillTags
          countryName
          company
          school
          starRating
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
          totalSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        badges {
          displayName
          icon
          creationDate
        }
        upcomingBadges {
          name
          icon
        }
        activeDays
        contributions {
          points
          questionCount
          testcaseCount
        }
        contestBadge {
          name
          expired
          hoverText
          icon
        }
        socialAccounts
      }
    }
    """
    variables = {"username": username}
    response = requests.post(
        "https://leetcode.com/graphql",
        json={"query": query, "variables": variables},
        headers={"Referer": f"https://leetcode.com/{username}/"}
    )
    return response.json().get("data", {}).get("matchedUser", {})

# Example usage
data = fetch_leetcode_data("dineshsutihar")
print(data)
```

</details>

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/dineshsutihar/dineshsutihar.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leetcode](https://leetcode.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Frequently Asked Questions

### Q: Can I use this template for my own portfolio?

**A:** Yes! Feel free to fork and customize it.

### Q: How can I contribute?

**A:** Open an issue or pull request with your suggestions or improvements.

### Q: Where can I find more of your work?

**A:** Check out my [GitHub profile](https://github.com/dineshsutihar).

---

## Changelog

- **v1.0.0** - Initial release
- **v1.1.0** - Added project gallery
- **v∞.∞.∞** forgot to keep track of versions, but feel free to suggest improvements!

---

## Feedback

Your feedback is valuable! Please open an issue or contact me directly for suggestions.

---

Thank you for visiting my portfolio!
