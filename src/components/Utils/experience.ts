export const calculateExperience = (): string => {
    // Total months of experience from past roles (Tecocraft: 4 months, LesGo: 14 months)
    const pastRolesMonths = 18;
    
    // Current role at Algorizz started Dec 2025
    const currentRoleStartDate = new Date('2025-12-01');
    const currentDate = new Date();
    
    let currentRoleMonths = (currentDate.getFullYear() - currentRoleStartDate.getFullYear()) * 12 + (currentDate.getMonth() - currentRoleStartDate.getMonth());
    if (currentRoleMonths < 0) currentRoleMonths = 0;
    
    const totalMonths = pastRolesMonths + currentRoleMonths;
    const diffInYears = totalMonths / 12;
    
    // Round to 1 decimal place, removing trailing zeros
    const formatted = Number(diffInYears.toFixed(1));
    
    return formatted.toString();
};
