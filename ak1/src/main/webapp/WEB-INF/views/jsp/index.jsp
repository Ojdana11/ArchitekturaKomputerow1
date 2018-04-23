<%@page session="false"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AK1</title>

  <meta name="description" content="">

  <c:url var="home" value="/" scope="request" />
  <spring:url value="/resources/css/" var="css" />
  <spring:url value="/resources/js/" var="js" />
  <spring:url value="/resources/fonts/" var="fonts" />


</head>
<body>
  <div id="root" class="wrapper"></div>
  <script src="${js}bundle.js"></script>
</body>
</html>
