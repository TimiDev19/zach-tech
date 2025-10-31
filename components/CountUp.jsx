// import { useEffect, useRef } from 'react';
// import { useInView, useMotionValue, useSpring } from 'motion/react';

// export default function CountUp({
//   to,
//   from = 0,
//   direction = 'up',
//   delay = 0,
//   duration = 2,
//   className = '',
//   startWhen = true,
//   separator = '',
//   onStart,
//   onEnd
// }) {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(direction === 'down' ? to : from);

//   const damping = 20 + 40 * (1 / duration);
//   const stiffness = 100 * (1 / duration);

//   const springValue = useSpring(motionValue, {
//     damping,
//     stiffness
//   });

//   const isInView = useInView(ref, { once: true, margin: '0px' });

//   const getDecimalPlaces = num => {
//     const str = num.toString();

//     if (str.includes('.')) {
//       const decimals = str.split('.')[1];

//       if (parseInt(decimals) !== 0) {
//         return decimals.length;
//       }
//     }

//     return 0;
//   };

//   const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.textContent = String(direction === 'down' ? to : from);
//     }
//   }, [from, to, direction]);

//   useEffect(() => {
//     if (isInView && startWhen) {
//       if (typeof onStart === 'function') onStart();

//       const timeoutId = setTimeout(() => {
//         motionValue.set(direction === 'down' ? from : to);
//       }, delay * 1000);

//       const durationTimeoutId = setTimeout(
//         () => {
//           if (typeof onEnd === 'function') onEnd();
//         },
//         delay * 1000 + duration * 1000
//       );

//       return () => {
//         clearTimeout(timeoutId);
//         clearTimeout(durationTimeoutId);
//       };
//     }
//   }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

//   useEffect(() => {
//     const unsubscribe = springValue.on('change', latest => {
//       if (ref.current) {
//         const hasDecimals = maxDecimals > 0;

//         const options = {
//           useGrouping: !!separator,
//           minimumFractionDigits: hasDecimals ? maxDecimals : 0,
//           maximumFractionDigits: hasDecimals ? maxDecimals : 0
//         };

//         const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

//         ref.current.textContent = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
//       }
//     });

//     return () => unsubscribe();
//   }, [springValue, separator, maxDecimals]);

//   return <span className={className} ref={ref} />;
// }

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
  threshold = 0.4, // how much should be visible before triggering
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // 👈 re-triggers every time it comes into view
    threshold,          // how much of the element must be visible
  });

  // Combine refs (so both motion and intersection observers work)
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  // --- Motion spring setup ---
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const getDecimalPlaces = (num) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === 'down' ? to : from);
    }
  }, [from, to, direction]);

  // --- Main animation trigger ---
  useEffect(() => {
    if (inView && startWhen) {
      if (typeof onStart === 'function') onStart();

      // reset to start
      motionValue.set(direction === 'down' ? to : from);

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === 'function') onEnd();
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [inView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  // --- Update text content ---
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const hasDecimals = maxDecimals > 0;
        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: hasDecimals ? maxDecimals : 0,
          maximumFractionDigits: hasDecimals ? maxDecimals : 0,
        };
        const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, maxDecimals]);

  return <span className={className} ref={setRefs} />;
}
