import { ModalOptions } from 'ng-zorro-antd/modal';

/**
 * Using custom options because of ng-zorro has a bug with CD inside dialog component
 * @example:
 * 
        nzContent: ConfirmDialogComponent,
        nzComponentParams: {
          title: 'Đăng xuất',
          message: `Bạn có chắc chắn muốn đăng xuất?`,
        },
        ...CONFIRM_DIALOG_MODAL_CONFIG,
        nzOkText: 'Đăng xuất',
        nzOnOk: () => {}
 */

export const CONFIRM_DIALOG_MODAL_CONFIG: ModalOptions = {
  nzClassName: 'confirm-dialog',
  nzOkDanger: true,
  nzCloseIcon: 'close-circle',
  nzCancelText: 'Huỷ',
  nzOkText: 'Đồng ý'
};
