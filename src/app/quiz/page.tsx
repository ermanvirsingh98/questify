import React from "react";

import { redirect } from "next/navigation";
import QuizCreation from "@/components/forms/QuizCreation";
import { auth } from "@/auth";

export const metadata = {
    title: "Quiz | Questify",
    description: "Quiz yourself on anything!",
};

interface Props {
    searchParams: {
        topic?: string;
    };
}

const Quiz = async ({ searchParams }: Props) => {
    const session = await auth();
    if (!session?.user) {
        redirect("/");
    }

    return <QuizCreation topic={searchParams.topic ?? ""} />;
};

export default Quiz;