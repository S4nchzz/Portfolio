export interface TechListProps {
    languages: [TechProp],
    database: [TechProp],
    frontend: [TechProp],
    backend: [TechProp],
    tools: [TechProp],
    os: [TechProp],
}

interface TechProp {
    name: string,
    imgSource: string
}