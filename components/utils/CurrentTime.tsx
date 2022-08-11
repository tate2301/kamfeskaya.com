import { useEffect, useState } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timeEmoji, setTimeEmoji] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      function calcTime(offset: number) {
        var d = new Date();
        var utc = d.getTime() + d.getTimezoneOffset() * 60000;
        var nd = new Date(utc + 3600000 * offset);
        const hour = nd.getHours();

        if (hour >= 3 && hour < 10) {
          setTimeEmoji('🌤');
        } else if (hour >= 12 && hour < 20) {
          setTimeEmoji('🌥');
        } else {
          // set night emoji
          setTimeEmoji('🌚');
        }
        // return time as a string
        return nd.toLocaleTimeString();
      }

      setTime(calcTime(2.5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col justify-center w-40 px-4 py-2 bg-white border border-gray-100 rounded-md align-center">
        <p className="mb-1 text-sm font-medium">🇿🇼 Harare</p>
        <p className="font-medium">
          {timeEmoji} {time}
        </p>
      </div>
    </div>
  );
}
