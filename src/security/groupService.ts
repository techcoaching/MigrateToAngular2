export class GroupService {
    private static groups: Array<any> = [
        { id: 1, name: "category 1", description: "Desription" },
        { id: 2, name: "category 2", description: "Desription 2" },
    ];
    public getAllGroups(): Array<any> {
        return GroupService.groups;
    }
}