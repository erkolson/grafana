export interface AlertRuleDTO {
  id: number;
  dashboardId: number;
  dashboardUid: string;
  dashboardSlug: string;
  panelId: number;
  name: string;
  state: string;
  newStateDate: string;
  evalDate: string;
  evalData?: { noData?: boolean; evalMatches?: any };
  executionError: string;
  url: string;
}

export interface AlertRule {
  id: number;
  dashboardId: number;
  dashboardUid?: string;
  dashboardSlug?: string;
  panelId: number;
  name: string;
  state: string;
  newStateDate?: string;
  stateText: string;
  stateIcon: string;
  stateClass: string;
  stateAge: string;
  url: string;
  info?: string;
  executionError?: string;
  evalDate?: string;
  evalData?: { noData?: boolean; evalMatches?: any };
}

export interface AlertRulesState {
  items: AlertRule[];
  searchQuery: string;
  isLoading: boolean;
}

export interface AlertNotification {
  isDefault: boolean;
  name: string;
  id: number;
  type: string;
}
