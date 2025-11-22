// Interface for MajorCredits (nominal typing using brand property)
export interface MajorCredits {
  credits: number;
  brand: "major";
}

// Interface for MinorCredits (nominal typing using brand property)
export interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}
