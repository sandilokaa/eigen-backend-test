export interface GetMember {
    code: string;
    name: string
}

export interface CreateMember {
    id: number;
    code: string;
    name: string;
    isPenalty: boolean;
}

export const getMemberFormat = (members: GetMember[]): Pick<GetMember, 'code' | 'name'>[] => {
    return members.map(({ code, name }) => ({ code, name }));
}

export const createMemberFormat = (member: CreateMember): Pick<CreateMember, 'id' |  'code' | 'name' | 'isPenalty'> => {
    return {
        id: member.id,
        code: member.code,
        name: member.name,
        isPenalty: member.isPenalty,
    };
}