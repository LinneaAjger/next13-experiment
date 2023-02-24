'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'


export default function NavLink({ label, path, targetSegment }) {
  const activeSegment = useSelectedLayoutSegment()
  return (
    <Link
        className={(activeSegment === targetSegment) ? 'active-class' : ''}
        href = { path } >
      { label }
      </Link >)
}