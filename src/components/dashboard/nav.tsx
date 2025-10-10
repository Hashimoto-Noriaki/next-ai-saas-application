import { navItems } from '@/config/nav'
import { Button } from '../ui/button'
import Link from 'next/link'

export const DashboardNav = () => {
    return (
        <nav>
            {navItems.map((item)=>(
                <Button key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                </Button>
            ))}
        </nav>
    )
}

export default DashboardNav 