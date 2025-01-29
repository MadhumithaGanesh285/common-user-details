// src/components/UserCard.tsx
import React, { useEffect, useState } from "react";
import { UserService } from "../services/UserService";
import { User } from "../interfaces/User";

interface Props {
  userId: string;
}

const UserCard: React.FC<Props> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    UserService.getUser(userId).then(setUser);
  }, [userId]);

  if (!user) return <p>Loading user data...</p>;

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px", textAlign: "center" }}>
      <img src={user.avatar} alt={user.name} style={{ width: "80px", borderRadius: "50%" }} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
