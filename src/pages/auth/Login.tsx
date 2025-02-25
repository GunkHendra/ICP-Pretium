import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CloudCog as CloudCogs } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"
import { AnimatedBackground } from "@/components/animated/auth-animated"

export function Login() {
    const [activeTab, setActiveTab] = useState("login")

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
            <AnimatedBackground />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="w-[400px] bg-gray-900/80 text-white backdrop-blur-md border-gray-700">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold flex items-center justify-center text-blue-400">
                            <CloudCogs className="mr-2 h-8 w-8" />
                            Pretium
                        </CardTitle>
                        <CardDescription className="text-gray-400">Connect to the decentralized future</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                                <TabsTrigger value="login" className="data-[state=active]:bg-blue-600">
                                    Login
                                </TabsTrigger>
                                <TabsTrigger value="register" className="data-[state=active]:bg-blue-600">
                                    Register
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <LoginForm />
                            </TabsContent>
                            <TabsContent value="register">
                                <RegisterForm />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

