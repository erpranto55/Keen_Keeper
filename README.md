# KeenKeeper — Relationship Management App

KeenKeeper is a modern React-based web application designed to help users maintain meaningful relationships by tracking interactions like calls, texts, and video chats.

---
## Live Link
[KeenKeeper](https://keen-keeper-gules.vercel.app/)
---

## Features

- Manage friends list <br>
- Track interactions (Call, Text, Video)<br>
- Status tracking (On-Track, Almost Due, Overdue)<br>
- Timeline of interactions<br>
- Dynamic stats (chart)<br>
- Toast notifications<br>
- Delete interactions instantly<br>
- Responsive design<br>

---

## Tech Stack

- React (Vite)<br>
- Tailwind CSS<br>
- React Router DOM<br>
- React Toastify<br>
- Recharts<br>

---

## Folder Structure

```
src/
├── Components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Home/
│   ├── Banner/
│   ├── Friends/
│   ├── FriendDetails/
│   ├── Timeline/
│   ├── Stats/
│   └── Root/
│
├── Pages/
│   └── ErrorPage.jsx
│
├── assets/
├── App.jsx
├── main.jsx
```

---

## Installation

1. Clone the repository<br>

```
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper <br>
```

2. Install dependencies<br>

```
npm install
```

3. Run the project<br>

```
npm run dev
```

4. Open in browser<br>

```
http://localhost:5173
```

---

## Core Functionalities

### Friend System

- View all friends <br>
- Track relationship status<br>

### Interaction System

- Add Call / Text / Video<br>
- Stored in localStorage<br>
- Real-time UI update<br>

### Timeline

- View all interactions<br>
- Filter by friend<br>
- Delete interactions<br>

### Stats

- Dynamic chart<br>
- Based on interaction types<br>

### Banner

- Total Friends<br>
- On Track<br>
- Need Attention<br>
- Monthly Interactions<br>

---

## Requirements Completed

- 404 Page for invalid routes<br>
- Loading spinner while fetching data<br>
- Toast notification for actions<br>
- Reload-safe routing after deployment<br>

---

## Deployment (Vercel Fix)

Create a file in root:

```
vercel.json
```

Add:

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## Author

**ER Pranto**
[LinkedIn](https://www.linkedin.com/in/erpranto55/)
[Facebook](https://www.facebook.com/erpranto55)
---

## Future Improvements

- Edit friend details<br>
- Add reminders<br>
- Backend integration<br>
- Authentication system<br>

---

## License

This project is for educational purposes.<br>
