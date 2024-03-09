'use client'
//react server components
//default -> server components
//component function name can be anything
//export default is mandatory
// unmatched, intercepting, intercepting and parallel (both together) routes -> explore
// complex-dashboard -> explore


import Link from "next/link";
import { Card, Image, Text, Badge, Button, Group, Center } from '@mantine/core';
export default function Home(){
    return (
        <>  
            {/* <h1>home page</h1> */}
            {/* <div className="flex gap-2">
                <Link href='/about'>about</Link>
                <Link href='/docs'>docs</Link>
                <Link href='/products' replace>products</Link>
            </div> */}
            <Center maw={400} h={400} bg="var(--mantine-color-gray-light)">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink">On Sale</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                    Book classic tour now
                </Button>
            </Card>
            </Center>
            

            
        </>
    )
}