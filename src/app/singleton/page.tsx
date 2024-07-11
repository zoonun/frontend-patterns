import CustomCodeBlock from "@/shared/components/Codeblock/Codeblock";
import { NextPage } from "next";

class Singleton {
  static instance: Singleton;

  private constructor() {}

  public static get getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const SingletonPage: NextPage = () => {
  const code = `
async function sayHello(name) {
  console.log('Hello', name);
}
`;
  return (
    <div className="flex min-h-screen flex-col items-center p-5">
      <CustomCodeBlock
        code={`class Singleton {
  static instance: Singleton;

  private constructor() {}

  public static get getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}`}
      />
    </div>
  );
};

export default SingletonPage;
