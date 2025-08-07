export function getRemainingTime(prayerTimeStr) {
  // 1. الوقت الحالي
  const now = new Date();

  // 2. فصل الساعة والدقيقة من "20:05"
  const [hour, minute] = prayerTimeStr.split(":").map(Number);

  // 3. إنشاء كائن Date للصلاة اليوم
  const prayerTime = new Date(now);
  prayerTime.setHours(hour);
  prayerTime.setMinutes(minute);
  prayerTime.setSeconds(0);
  prayerTime.setMilliseconds(0);

  // 4. لو وقت الصلاة فات، نزيد يوم (مثلاً غدوة)
  if (prayerTime < now) {
    prayerTime.setDate(prayerTime.getDate() + 1);
  }

  // 5. الفرق بالميلي ثانية
  const diff = prayerTime - now;

  // 6. تحويل الفرق إلى ساعات، دقائق، ثواني
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
    formatted: `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
  };
}
