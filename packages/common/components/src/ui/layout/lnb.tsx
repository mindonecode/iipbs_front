export function LNB() {
  return (
    <div
      id="lnb"
      className="!w-[22rem] overflow-auto border-r border-solid border-border"
    >
      <ul>
        <li id="m_dashboard">
          <a href="#none" className="!bg-background">
            Dashboard
            <i
              className="diveicon di-diveicon di-chevron-down arrow"
              aria-hidden="true"
            />
          </a>
        </li>
        <div className="mline">PAGES</div>
        <li id="m_page_board">
          <a href="#none" className="!bg-background">
            콘텐츠 관리
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_page_mem">
          <a href="#none" className="!bg-background">
            로그인 & 회원관리
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_page_manage">
          <a href="#none" className="!bg-background">
            페이지 관리
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_page_example">
          <a href="#none" className="!bg-background">
            샘플 페이지
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_layouts">
          <a href="#none" className="!bg-background">
            페이지 레이아웃
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <div className="mline">COMPONENTS</div>
        <li id="m_charts">
          <a href="#none" className="!bg-background">
            Charts
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_tables">
          <a href="#none" className="!bg-background">
            Tables
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_elements">
          <a href="#none" className="!bg-background">
            Elements
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_tabs">
          <a href="#none" className="!bg-background">
            Tabs
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_popup">
          <a href="#none" className="!bg-background">
            Modal
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_swipe">
          <a href="#none" className="!bg-background">
            Swipe
            <i className="diveicon di-chevron-down arrow" aria-hidden="true" />
          </a>
        </li>
        <li id="m_icon">
          <a href="#none" className="!bg-background">
            Font Icon
          </a>
        </li>
        <div className="mline">OTHERS</div>
        <li id="m_elements">
          <a href="#none" className="!bg-background">
            Menu Label <span className="ar_label_box red">NEW</span>
          </a>
        </li>
        <li id="m_elements">
          <a href="#none" className="!bg-background">
            External Link
          </a>
        </li>
      </ul>
    </div>
  );
}
