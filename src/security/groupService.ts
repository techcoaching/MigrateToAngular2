export class GroupService {
    private static groups: Array<any> = [
        { id: 1, name: "category 1", description: "Desription", user: { id: 1, firstName: "Tu", lastName: "Tran" } },
        { id: 2, name: "category 2", description: "Desription 2", user: { id: 2, firstName: "Tu 1", lastName: "Tran" } },
    ];
    public getAllGroups(): Array<any> {
        return GroupService.groups;
    }
}