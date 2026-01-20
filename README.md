# 📁 Cloud File Storage – Frontend

A modern **cloud file storage frontend application** built with **React + Vite** that allows users to upload, manage, preview, search, and share files — similar to Google Drive.

This frontend is fully connected with a custom backend API and Supabase storage.

---

## 🚀 Features

### 🔐 Authentication

* User registration & login
* JWT-based authentication
* Protected routes

### 📂 File Management

* Upload files (drag & drop supported)
* View uploaded files
* File preview (images, PDFs, text files)
* Rename files
* Move files to trash
* Restore or permanently delete files

### 📁 Folder System

* Create folders
* Navigate folders using breadcrumbs
* Nested folder support

### 🔎 Search & Sorting

* Real-time search (files & folders)
* Sort by:

  * Name
  * Size
  * Date

### 🔗 Sharing

* Share files using links
* Permission-based access (viewer / editor)
* Public share preview

### 🗑 Trash

* View deleted files
* Restore files
* Delete permanently

### ⚡ Performance

* Optimized rendering using `useMemo`
* Lazy loading for large lists
* Clean and responsive UI

---

## 🧰 Tech Stack

* **React 19**
* **Vite**
* **Tailwind CSS**
* **Axios**
* **React Router DOM**
* **JWT Authentication**
* **Supabase Storage (via backend)**

---

## 📁 Project Structure

```
src/
│
├── api/
│   └── api.js
│
├── components/
│   ├── FileCard.jsx
│   ├── FolderCard.jsx
│   ├── FileUpload.jsx
│   ├── FilePreview.jsx
│   ├── ShareModal.jsx
│   └── BreadCrumbs.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   └── Trash.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root of frontend:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For production:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
```

---

## 📦 Installation

```bash
git clone https://github.com/your-username/cloud-file-storage-client.git
cd cloud-file-storage-client
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 Backend Connection

This frontend communicates with backend APIs:

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/files
POST   /api/files/upload
PUT    /api/files/:id/rename
PUT    /api/files/:id/trash
PUT    /api/files/:id/restore
DELETE /api/files/:id
GET    /api/files/trash
```

JWT token is stored in `localStorage` and automatically attached using Axios interceptors.

---

## 🔐 Authentication Flow

1. User logs in
2. Backend returns JWT token
3. Token stored in `localStorage`
4. Axios sends token in headers:

```
Authorization: Bearer <token>
```

5. Protected routes become accessible

---

## 🌐 Deployment

Frontend deployed using **Vercel**.

### Steps:

```bash
npm run build
```

Upload to Vercel and add environment variable:

```
VITE_API_BASE_URL = https://your-backend-url/api
```

---

## 📸 Screens (Optional)

* Login Page
* Dashboard
* File Upload
* Preview Modal
* Share Modal
* Trash Page

(Add screenshots if you want)

---

## 👩‍💻 Developed By

**Sonali Priyadarshini**

* Full Stack Developer
* React | Node.js | Supabase | REST APIs



