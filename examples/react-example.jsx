// Example: Using dev-console-kit in a React Component
import Logger from "dev-console-kit";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Logger.success("UserProfile component mounted");

    // Simulate API call
    fetchUser();

    return () => {
      Logger.warning("UserProfile component unmounting");
    };
  }, []);

  const fetchUser = async () => {
    try {
      Logger.inspect("Fetching user", { timestamp: new Date().toISOString() });

      const response = await fetch("/api/user");
      const data = await response.json();

      setUser(data);
      Logger.success("User data fetched successfully", data);

      // Inspect the complete user object
      Logger.inspect("User Details", data);
    } catch (error) {
      Logger.error("Failed to fetch user data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDebugLayout = () => {
    // Use this to debug CSS layout issues
    Logger.debugLayout();
    Logger.warning("Layout debug mode activated! Check the page outline.");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      {/* Debug button - remove in production */}
      <button onClick={handleDebugLayout}>Debug Layout</button>
    </div>
  );
}
