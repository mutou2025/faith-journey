import type { APIRoute } from 'astro';
import { GROUP, nextMeeting } from '../group';

// 每周四重复的日历事件。不含 Zoom 链接和密码（请看群里）。
export const GET: APIRoute = ({ site }) => {
  const start = (nextMeeting()?.date ?? '2026-11-26').replace(/-/g, '');
  const endMin = 21 * 60 + GROUP.durationMin;
  const end = `${String(Math.floor(endMin / 60)).padStart(2, '0')}${String(endMin % 60).padStart(2, '0')}00`;
  const url = new URL('/group/', site).href;
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//faith-journey//group//ZH',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    'TZID:America/Toronto',
    'BEGIN:DAYLIGHT',
    'TZOFFSETFROM:-0500',
    'TZOFFSETTO:-0400',
    'TZNAME:EDT',
    'DTSTART:19700308T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
    'END:DAYLIGHT',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:-0400',
    'TZOFFSETTO:-0500',
    'TZNAME:EST',
    'DTSTART:19701101T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    'UID:thursday-bible-study@faith-journey',
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`,
    `DTSTART;TZID=America/Toronto:${start}T210000`,
    `DTEND;TZID=America/Toronto:${start}T${end}`,
    'RRULE:FREQ=WEEKLY;BYDAY=TH',
    `SUMMARY:${GROUP.name}`,
    `DESCRIPTION:代祷 · 读经 · 分享。本周经文和讨论问题：${url}\\nZoom 链接请看群里。`,
    'LOCATION:Zoom（链接见群里）',
    `URL:${url}`,
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    'DESCRIPTION:读经小组 30 分钟后开始',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  return new Response(body + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Content-Disposition': 'attachment; filename="bible-study.ics"' },
  });
};
