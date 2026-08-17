import { NextResponse } from 'next/server';
import { getStore } from '@/lib/mirror-store';

export const revalidate = 60;

export async function GET() {
  try {
    const store = getStore();

    return NextResponse.json(
      {
        primary: store.primary,
        mirrors: store.mirrors,
        total: store.mirrors.length,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (error) {
    console.error('List mirrors error:', error);

    return NextResponse.json(
      {
        primary: 'https://cinepurge.xyz/',
        mirrors: [],
        total: 0,
        timestamp: new Date().toISOString(),
        fallback: true,
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=30',
        },
      }
    );
  }
}
