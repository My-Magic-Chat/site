export type Projects = 'site';

export interface PageView {
    page: string;
}

export type EventClick =
    'create_account_click'
    | 'go_login_click'
    | 'contract_plan_click'
    | 'create_workflow_click'
    | 'section_click';

export type EventData<Name extends EventClick> =
    Name extends 'contract_plan_click' ? { plan_name: string; } :
    Name extends 'create_account_click' ? { origin: 'hero' | 'getStarted'; } :
    Name extends 'go_login_click' ? { origin: 'hero' | 'header'; } :
    Name extends 'section_click' ? { section: 'feature' | 'plan' | 'social'; } :
    any;