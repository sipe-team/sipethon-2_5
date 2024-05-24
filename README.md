# 2-5

## Routing Structure

> **`/`** 이면 **`/routine`** 으로 redirecting

- **/timer**
  - result
- **/routine** (main)
  - [id] (_id에 어떤 값이 올지는 개발하면서 결정_)
- **/history**
  - [id] (_id에 어떤 값이 올지는 개발 하면서 결정_)
- **/profile**
- **/login**

## how to routing in nextjs (based app route)

### Redirection

```tsx
import { redirect } from "next/navigation"; // server component에서만 사용 가능

const Home = () => {
  redirect("/routine"); // redirect to /routine
};

export default Home;
```

### Push / Backward

```tsx
"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/routine");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Routine</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Home;
```
