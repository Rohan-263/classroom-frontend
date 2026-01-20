import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamentals of programming, algorithms, and computational thinking for beginners.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Advanced integration techniques, infinite series, and applications of calculus.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Physics I: Mechanics",
    department: "Physics",
    description:
      "Classical mechanics including kinematics, dynamics, energy, and oscillations.",
    createdAt: new Date().toISOString(),
  },
];
