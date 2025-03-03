```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted!');
    return () => {
      console.log('Component unmounted!');
    };
  }, []); // Empty dependency array ensures effect runs only once on mount and unmount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```