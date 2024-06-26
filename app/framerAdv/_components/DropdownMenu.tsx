'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import { AppleIcon } from 'lucide-react'
import { ReactNode, useState } from 'react'

export default function DropdownMenuAnim() {
    let [text, setText] = useState('Select an item')
    let [open, setOpen] = useState(false)
    console.log(open)

    return (
        <div className="flex min-h-full items-center justify-center">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md border border-gray-300 bg-white">
                <header className="border-b border-gray-100 p-2">
                    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
                        <DropdownMenu.Trigger className="cursor-default select-none rounded px-4 text-2xl hover:bg-gray-200/50 focus-visible:outline-none data-[state=open]:bg-gray-200/75">
                            <AppleIcon />
                        </DropdownMenu.Trigger>

                        <AnimatePresence>
                            {open && (
                                <DropdownMenu.Portal forceMount>
                                    <DropdownMenu.Content
                                        forceMount
                                        asChild
                                        align="start"
                                        className="mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                // transition: { duration: 1 },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                // transition: { duration: 1 },
                                            }}
                                        >
                                            <Item
                                                onSelect={() => {
                                                    setText('Clicked Item 1')
                                                    // setOpen(false)
                                                }}
                                            >
                                                Item 1
                                            </Item>
                                            <Item
                                                onSelect={() =>
                                                    setText('Clicked Item 2')
                                                }
                                            >
                                                Item 2
                                            </Item>
                                            <Item onSelect={() => alert(';)')}>
                                                Item 3
                                            </Item>
                                        </motion.div>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            )}
                        </AnimatePresence>
                    </DropdownMenu.Root>
                </header>
                <div className="px-6 py-8 text-right">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

function Item({
    children,
    onSelect = () => {},
}: {
    children: ReactNode
    onSelect?: () => void
}) {
    return (
        <DropdownMenu.Item
            onSelect={(e) => {
                e.preventDefault
                // setOpen(prev=>!prev)
                onSelect()
            }}
            className="w-40 select-none rounded px-2 py-1.5 text-gray-700 data-[highlighted]:bg-sky-400 data-[highlighted]:text-white data-[highlighted]:focus:outline-none"
        >
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0, transition: { delayChildren: 2000 } }}
            >
                {children}
            </motion.div>
        </DropdownMenu.Item>
    )
}
