import type { GitHubAccountInfo } from "./types";

type ProfileProps = {
  profileData: GitHubAccountInfo;
};

const Profile = ({ profileData }: ProfileProps) => {
  return (
    <>
      <img
        src={profileData.avatar_url}
        alt={`${profileData.login}'s profile picture`}
      />
      <div>
        <a href={profileData.html_url} target="_blank">
          {profileData.login}
        </a>
        <p>
          User Joined on{" "}
          {new Date(profileData.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <p>Public Repos: {profileData.public_repos}</p>
      <p>Followers: {profileData.followers}</p>
      <p>Following: {profileData.following}</p>
    </>
  );
};

export default Profile;
