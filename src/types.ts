export interface Patient {
    id: string;
    name: string;
    age: number;
    visitType: 'Routine' | 'Follow-up';
}

export type Page = 'dashboard' | 'consultation';
