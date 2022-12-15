import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import ProfileHeader from "../../components/ProfileHeader";
import RepoList from "../../components/RepoList";
import { UserDetail } from "../../types/UserDetail";
import fetchData from "../../utils/fetchData";

export default function Detail() {
  const router = useRouter();
  const { username } = router.query;
  const { data: user, error } = useSWR<UserDetail>(
    username && `https://api.github.com/users/${username}`,
    fetchData
  );
  return (
    <div className="py-10">
      <Head>
        <title>Detail {user?.name}</title>
      </Head>
      <div>
        <ProfileHeader user={user} />
        <RepoList reposUrl={user?.repos_url} />
      </div>
    </div>
  );
}
