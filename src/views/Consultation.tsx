import React, { useState, useEffect } from 'react';
import type { Patient } from '../types';
import { SafetyBanner } from '../components/SafetyBanner';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Clock, User, FileText, ClipboardList, AlertCircle } from "lucide-react";

interface ConsultationProps {
    patient: Patient;
    onEndConsultation: () => void;
}

export const Consultation: React.FC<ConsultationProps> = ({ patient, onEndConsultation }) => {
    const [startTime] = useState<Date>(new Date());
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds: number) => {
        const mm = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const ss = (totalSeconds % 60).toString().padStart(2, '0');
        return `${mm}:${ss}`;
    };

    const [checklist, setChecklist] = useState({
        symptoms: false,
        history: false,
        followUp: false,
    });

    const toggleCheck = (key: keyof typeof checklist) => {
        setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const progress = Math.round(
        (Object.values(checklist).filter(Boolean).length / Object.values(checklist).length) * 100
    );

    return (
        <div className="container h-full flex flex-col gap-6 py-6">
            <SafetyBanner
                message="⚠️ Synthetic demo only — not for clinical use"
                className="w-full"
            />

            <div className="flex gap-6 h-[calc(100vh-220px)] min-h-[500px]" style={{ alignItems: 'start' }}>
                {/* Left Panel */}
                <Card className="w-[300px] shrink-0 h-full flex flex-col">
                    <CardHeader className="bg-muted/50 pb-2">
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Patient Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6 pt-6 flex-1">
                        <div className="flex flex-col gap-1">
                            <div className="text-muted-foreground text-sm uppercase font-bold tracking-wider flex items-center gap-1">
                                Name
                            </div>
                            <div className="font-semibold text-2xl">{patient.name}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="text-muted-foreground text-sm uppercase font-bold tracking-wider">Age</div>
                                <div className="font-medium text-lg">{patient.age} yrs</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-muted-foreground text-sm uppercase font-bold tracking-wider">Type</div>
                                <div className="font-medium text-lg">{patient.visitType}</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="text-muted-foreground text-sm uppercase font-bold tracking-wider flex items-center gap-1">
                                <Clock className="h-3 w-3" /> Started At
                            </div>
                            <div className="font-medium text-xl font-mono tracking-tight">
                                {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t">
                            <div className="rounded-md bg-yellow-50 p-4 border border-yellow-200">
                                <div className="flex items-start gap-2">
                                    <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                                    <div className="text-sm text-yellow-800 font-medium">
                                        Synthetic Constraints
                                    </div>
                                </div>
                                <ul className="mt-2 text-xs text-yellow-700 space-y-1 list-disc list-inside">
                                    <li>No vitals available</li>
                                    <li>No medication history</li>
                                    <li>No prior conditions</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Panel */}
                <div className="flex flex-col flex-1 gap-4 h-full">

                    {/* Top Utilities */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <ClipboardList className="h-4 w-4" />
                            <span className="text-sm font-medium">Consultation Workspace</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-card border rounded-md px-3 py-1.5 shadow-sm">
                                <div className={`h-2 w-2 rounded-full ${elapsedSeconds % 2 === 0 ? 'bg-red-500' : 'bg-transparent'} transition-colors duration-500`} />
                                <span className="font-mono text-2xl font-bold tabular-nums">
                                    {formatTime(elapsedSeconds)}
                                </span>
                            </div>

                            <Button
                                variant="destructive"
                                className="gap-2 shadow-sm"
                                onClick={onEndConsultation}
                            >
                                End Session
                            </Button>
                        </div>
                    </div>

                    {/* Consultation Workspace */}
                    <Card className="flex-1 flex flex-col overflow-hidden shadow-sm border-muted">
                        <CardContent className="flex-1 flex flex-col gap-0 p-0 h-full">

                            <div className="flex-1 p-6 flex flex-col gap-2 min-h-0 relative">
                                <Label htmlFor="notes" className="text-base font-semibold text-muted-foreground flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    Clinical Notes
                                </Label>
                                <Textarea
                                    id="notes"
                                    className="flex-1 w-full p-4 resize-none font-sans text-lg focus-visible:ring-0 border-0 shadow-none bg-transparent placeholder:text-muted-foreground/50"
                                    placeholder="Type your notes here..."
                                    autoFocus
                                />
                                <div className="absolute bottom-4 right-6 text-xs text-muted-foreground pointer-events-none">
                                    Session ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                                </div>
                            </div>

                            <div className="border-t bg-muted/30 p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <Label className="text-sm font-semibold flex items-center gap-2">
                                        <ClipboardList className="h-4 w-4" />
                                        Required Actions
                                    </Label>
                                    <span className="text-xs font-medium text-muted-foreground">{progress}% Complete</span>
                                </div>

                                <Progress value={progress} className="h-1 mb-6" />

                                <div className="flex gap-8">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="symptoms" checked={checklist.symptoms} onCheckedChange={() => toggleCheck('symptoms')} />
                                        <Label htmlFor="symptoms" className="cursor-pointer font-normal">Review symptoms</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="history" checked={checklist.history} onCheckedChange={() => toggleCheck('history')} />
                                        <Label htmlFor="history" className="cursor-pointer font-normal">Check history</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="followUp" checked={checklist.followUp} onCheckedChange={() => toggleCheck('followUp')} />
                                        <Label htmlFor="followUp" className="cursor-pointer font-normal">Plan follow-up</Label>
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div >
    );
};
