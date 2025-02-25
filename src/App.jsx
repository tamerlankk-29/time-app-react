import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date()); // Реальное время
  const [seconds, setSeconds] = useState(0); // Секундомер
  const [isRunning, setIsRunning] = useState(false);

  // Обновляем реальное время каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Таймер (секундомер)
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div style={styles.container}>
      <h1>⏳ Time App</h1>

      {/* Реальное время */}
      <h2>Текущее время: {time.toLocaleTimeString()}</h2>

      {/* Таймер (секундомер) */}
      <h2>Таймер: {seconds} сек</h2>
      <div>
        <button onClick={() => setIsRunning(true)} style={styles.button}>Старт</button>
        <button onClick={() => setIsRunning(false)} style={styles.button}>Стоп</button>
        <button onClick={() => { setSeconds(0); setIsRunning(false); }} style={styles.button}>Сброс</button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", fontFamily: "Arial", padding: "20px" },
  button: { margin: "5px", padding: "10px", fontSize: "16px", cursor: "pointer" }
};

export default App;