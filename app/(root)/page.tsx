"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-[#fefbf6]">
            Get Interview-Ready with AI-powered Practice & Feedback{" "}
          </h2>
          <p className="text-[#fefbf6]">
            practice on real interview questions & get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview"> Start an Interview</Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interview</h2>
        <div className="interview-section flex flex-row flex-wrap gap-4 justify-start">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interview-section flex flex-row flex-wrap gap-4 justify-start">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          <p className="text-[#060949]">You haven't taken any interview yet</p>
        </div>
      </section>
    </>
  );
};
export default Page;
