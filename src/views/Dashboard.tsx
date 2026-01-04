import React from 'react';
import type { Patient } from '../types';
import { SafetyBanner } from '../components/SafetyBanner';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Clock, Activity, ArrowRight } from "lucide-react";

interface DashboardProps {
    onStartConsultation: (patient: Patient) => void;
}

const DEMO_PATIENTS: Patient[] = [
    { id: '1', name: 'John Demo', age: 45, visitType: 'Routine' },
    { id: '2', name: 'Jane Sample', age: 32, visitType: 'Follow-up' },
    { id: '3', name: 'Robert Test', age: 67, visitType: 'Routine' },
    { id: '4', name: 'Emily Mock', age: 28, visitType: 'Routine' },
    { id: '5', name: 'Michael Synth', age: 54, visitType: 'Follow-up' },
    { id: '6', name: 'Sarah Fake', age: 41, visitType: 'Follow-up' },
];

export const Dashboard: React.FC<DashboardProps> = ({ onStartConsultation }) => {
    return (
        <div className="container flex flex-col gap-6 py-8">
            <SafetyBanner
                message="⚠️ Demo environment — synthetic data only. No real patient data."
                className="justify-center text-center font-bold"
            />

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Patients Waiting
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{DEMO_PATIENTS.length}</div>
                        <p className="text-sm text-muted-foreground">
                            +2 expected in the next hour
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Avg. Wait Time
                        </CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">12m</div>
                        <p className="text-sm text-muted-foreground">
                            -4m from yesterday
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Completed Today
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">8</div>
                        <p className="text-sm text-muted-foreground">
                            On track for daily target
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Today’s Demo Patients</CardTitle>
                    <CardDescription>
                        Manage your daily consultation queue (synthetic data)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Avatar</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Age</TableHead>
                                <TableHead>Visit Type</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {DEMO_PATIENTS.map((patient) => (
                                <TableRow key={patient.id}>
                                    <TableCell>
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={`https://api.dicebear.com/7.x/notionists/svg?seed=${patient.id}`} alt={patient.name} />
                                            <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="font-medium">{patient.name}</TableCell>
                                    <TableCell className="text-muted-foreground">{patient.age} yrs</TableCell>
                                    <TableCell>
                                        <Badge variant={patient.visitType === 'Routine' ? 'secondary' : 'default'} className={patient.visitType === 'Routine' ? 'bg-sky-100 text-sky-800 hover:bg-sky-200 shadow-none' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 shadow-none'}>
                                            {patient.visitType}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            size="sm"
                                            onClick={() => onStartConsultation(patient)}
                                            className="gap-2"
                                        >
                                            Start Consultation <ArrowRight className="h-3 w-3" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};
