import { Injectable } from '@nestjs/common';
import { CoreAPIClient } from 'fsm-sdk';
import { configService } from 'src/config/config.service';
import { Context } from '../ctx.decorator';

@Injectable()
export class FsmAPIClientFactory {

  public fromContext(ctx: Context) {
    return new CoreAPIClient({
      debug: configService.useVerboseLogs(),
      clientIdentifier: ctx.clientId,
      clientVersion: ctx.clientVersion,
      clientSecret: 'none',
      authAccountName: ctx.account,
      authCompany: ctx.company,
      authUserName: ctx.user
    }).setToken({
      access_token: ctx.authToken.split(' ')[1],
      token_type: ctx.authToken.split(' ')[0],
      expires_in: null,
      scope: 'n/a',
      account: ctx.account,
      account_id: parseInt(ctx.accountId),
      user: ctx.user,
      user_email: null,
      companies: [{ name: ctx.company, id: parseInt(ctx.companyId), strictEncryptionPolicy: false, description: '' }],
      authorities: [],
      cluster_url: `https://${ctx.cloudHost}`
    })
  }

  public ALL_DTO_VERSIONS: { [name: string]: number } = {
    'Activity': 31,
    'ActivitySubType': 14,
    'Approval': 13,
    'Attachment': 16,
    'Address': 17,
    'BusinessPartner': 20,
    'BusinessPartnerGroup': 14,
    'BusinessProcessStepDefinition': 15,
    'ChecklistInstance': 17,
    'ChecklistInstanceElement': 13,
    'ChecklistCategory': 10,
    'ChecklistTemplate': 17,
    'ChecklistTag': 8,
    'ChecklistVariable': 8,
    'Currency': 11,
    'CustomRule': 8,
    'Contact': 16,
    'CompanyInfo': 15,
    'CompanySettings': 11,
    'EmployeeBranch': 9,
    'EmployeeDepartment': 9,
    'EmployeePosition': 9,
    'Enumeration': 11,
    'Equipment': 18,
    'Expense': 15,
    'ExpenseType': 15,
    'FieldConfiguration': 8,
    'Filter': 12,
    'Function': 8,
    'Group': 13,
    'Icon': 8,
    'Item': 21,
    'ItemGroup': 10,
    'ItemPriceListAssignment': 14,
    'Material': 18,
    'Mileage': 16,
    'MileageType': 14,
    'PaymentTerm': 14,
    'Person': 18,
    'PersonReservation': 15,
    'PersonReservationType': 15,
    'PersonWorkTimePattern': 8,
    'Plugin': 8,
    'Project': 10,
    'ProjectPhase': 10,
    'PriceList': 14,
    'ProfileObject': 22,
    'ReportTemplate': 15,
    'Requirement': 8,
    'Region': 9,
    'ReservedMaterial': 16,
    'ScreenConfiguration': 8,
    'ServiceAssignment': 25,
    'ServiceAssignmentStatus': 12,
    'ServiceAssignmentStatusDefinition': 14,
    'ServiceCall': 24,
    'Shift': 8,
    'ShiftTechnician': 8,
    'Skill': 8,
    'Team': 8,
    'TeamTimeFrame': 8,
    'Tag': 8,
    'Tax': 9,
    'TimeEffort': 15,
    'TimeTask': 16,
    'TimeSubTask': 14,
    'Translation': 8,
    'UdfMeta': 13,
    'UdfMetaGroup': 10,
    'UserSyncConfirmation': 13,
    'Warehouse': 15,
    'WorkTimeTask': 15,
    'WorkTimePattern': 8,
    'WorkTime': 15,
    'Notification': 8,
    'CrowdExecutionRecord': 8,
    'UnifiedPerson': 8
  };
}