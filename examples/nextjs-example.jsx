// Example: Using dev-console-kit in Next.js (App Router)
// This file demonstrates both Client and Server components

// ========== SERVER COMPONENT ==========
// This runs on the server
import Logger from "dev-console-kit";

async function getUserData(id) {
  // Server-side logs will show [SERVER] prefix
  Logger.success(`Fetching user ${id} on server`);

  try {
    const res = await fetch(`https://api.example.com/users/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();

    Logger.inspect("Server: User Data Retrieved", data);
    return data;
  } catch (error) {
    Logger.error("Server: Failed to fetch user", error);
    return null;
  }
}

export default async function UserPage({ params }) {
  const user = await getUserData(params.id);

  if (!user) {
    Logger.warning("Server: No user data available");
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <UserClient userData={user} />
    </div>
  );
}

// ========== CLIENT COMPONENT ==========
("use client");

import { useEffect, useState } from "react";

function UserClient({ userData }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Client-side logs will show [CLIENT] prefix
    Logger.success("Client component hydrated!");
    Logger.inspect("Client: Initial user data", userData);

    // You'll see a mentor tip in the browser console!
    setMounted(true);

    // Uncomment to debug layout issues
    // Logger.debugLayout();
  }, []);

  const handleUpdateUser = async () => {
    try {
      Logger.inspect("Client: Updating user", { id: userData.id });

      const response = await fetch(`/api/users/${userData.id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: "Updated Name" }),
      });

      if (response.ok) {
        Logger.success("Client: User updated successfully!");
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      Logger.error("Client: Failed to update user", error);
    }
  };

  return (
    <div>
      <p>Email: {userData.email}</p>
      <button onClick={handleUpdateUser}>Update User</button>

      {/* Debug Tools - Remove in production */}
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={() => {
            Logger.debugLayout();
            Logger.warning("Layout debugging active - check element outlines");
          }}
          style={{ marginLeft: "10px" }}>
          Debug CSS Layout
        </button>
      )}
    </div>
  );
}
