<div class="row">
    <div class="col-xs-9 col-sm-4" style="line-height: 32px; vertical-align:middle;">
        <button id="toggle" type="button" class="btn btn-default btn-xs" title="แสดง/ซ่อนรายการ"><span class="glyphicon glyphicon-transfer"></span></button>
        <span style="color:#125997;font-size:18px;"><b>การประปานครหลวง</b></span>
    </div>

    <div class="col-xs-12 col-sm-8 hidden-xs hidden-sm" style="text-align: right;">
        <span style="vertical-align:middle;font-size:13px">ผู้ใช้ : <span style="color: blue;">${sessionScope.voUserContext.userId}-${sessionScope.voUserContext.userName}</span> 
                                                           สาขา : <span style="color: blue;">${sessionScope.voUserContext.workOrganizeMwaInfo.branchInfo.branchCode}-${sessionScope.voUserContext.workOrganizeMwaInfo.branchInfo.branchName}</span> 
        </span>
  <button type="button" class="btn btn-default btn-sm" onclick="window.location.href='<%=request.getContextPath()%>/main.jsp'" title="เข้าสู่หน้าหลัก">
        <span class="glyphicon glyphicon-home"></span></button>
  <button type="button" class="btn btn-default btn-sm" title="ขอความช่วยเหลือ"><span class="glyphicon glyphicon-book"></span></button>
        <c:choose>
            <c:when test="${notification > 0}">
                <button type="button" class="btn btn-default btn-sm btn-danger" onclick="window.location.href='../todolist/page2.html'" title="แจ้งเตือน"><span class="glyphicon glyphicon-envelope"><span class="badge">${notification}</span></span></button>
            </c:when>
        <c:otherwise>
            <button type="button" class="btn btn-default btn-sm" onclick="window.location.href='../todolist/page2.html'" title="แจ้งเตือน"><span class="glyphicon glyphicon-envelope"></span></button>
        </c:otherwise>
        </c:choose>
            <button type="button" class="btn btn-default btn-sm" title="เลือกระบบ" onclick="document.frmMenu.actLogout.value='EXT';document.frmMenu.action='<%=request.getContextPath()%>/SecurityServlet';document.frmMenu.submit();"><span class="glyphicon glyphicon glyphicon-th"></span></button>
            <button type="button" class="btn btn-default btn-sm" title="ออกจากระบบ" onclick="document.frmMenu.actLogout.value='Logout';document.frmMenu.action='<%=request.getContextPath()%>/SecurityServlet';document.frmMenu.submit();"><span class="glyphicon glyphicon-log-out"></span></button>
   </div>
   <div class="col-xs-3 col-sm-8 hidden-lg hidden-md" style="text-align: right;">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-align-justify"></span></button>
        <ul class="dropdown-menu dropdown-menu-right">
          <li  style="text-align: left;"><a href="#" onclick="window.location.href='<%=request.getContextPath()%>/main.jsp'"><span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;เข้าสู่หน้าหลัก</a></li>
          <li  style="text-align: left;"><a href="#"><span class="glyphicon glyphicon-book"></span>&nbsp;&nbsp;ขอความช่วยเหลือ</a></li>
          <li  style="text-align: left;"><a href="#"><span class="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;แจ้งเตือน</a></li>
          <li  style="text-align: left;"><a href="#" onclick="document.frmMenu.actLogout.value='EXT';document.frmMenu.action='<%=request.getContextPath()%>/SecurityServlet';document.frmMenu.submit();"><span class="glyphicon glyphicon-th"></span>&nbsp;&nbsp;เลือกระบบ</a></li>
          <li  style="text-align: left;"><a href="#" onclick="document.frmMenu.actLogout.value='Logout';document.frmMenu.action='<%=request.getContextPath()%>/SecurityServlet';document.frmMenu.submit();"><span class="glyphicon glyphicon-log-out"></span>&nbsp;&nbsp;ออกจากระบบ</a></li>
        </ul>
            <!--div class="btn-group">
           <button type="button" class="btn btn-default dropdown-toggle dropdown-menu-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <span class="glyphicon glyphicon-home"></span>
           </button>
           <ul class="dropdown-menu">
             <li><a href="#">เข้าสู่หน้าหลัก</a></li>
             <li><a href="#">แจ้งเตือน</a></li>
             <li><a href="#">เลือกระบบ</a></li>
             <li><a href="#">ออกจากระบบ</a></li>
           </ul>
         </div-->
    </div>
</div>
<!-- Split button -->
