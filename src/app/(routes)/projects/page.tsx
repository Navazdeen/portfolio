'use client'
import ProjectCard from "@/components/projectCard"
import { ChevronsLeftIcon, ChevronsRightLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;  
  html_url: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  console.log(process.env.NEXT_PUBLIC_GITHUB_TOKEN)
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repos');
        }

        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchRepos();
  }, []);
  return (
    <div className='flex py-12 px-4 flex-col'>
      <div className="font-bold text-4xl py-8">Some of my projects</div>
      <div className="grid grid-cols-3 gap-y-8 pb-8 px-4">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} heading={repo.name} description={repo.description} link={repo.html_url} />
        ))}
      </div>
    </div>
  )
}