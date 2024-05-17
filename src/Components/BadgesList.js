const BadgesList = {
  HTML: {
    name: "HTML",
    width: "118.25px",
    height: "43px",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODguMjUiIGhlaWdodD0iMjgiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iSFRNTDUiPjx0aXRsZT5IVE1MNTwvdGl0bGU+PGcgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cmVjdCB3aWR0aD0iODguMjUiIGhlaWdodD0iMjgiIGZpbGw9IiNlMzRmMjYiLz48L2c+PGcgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IlZlcmRhbmEsR2VuZXZhLERlamFWdSBTYW5zLHNhbnMtc2VyaWYiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGZvbnQtc2l6ZT0iMTAwIj48aW1hZ2UgeD0iOSIgeT0iNyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSjNhR2wwWlNJZ2NtOXNaVDBpYVcxbklpQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSFJwZEd4bFBraFVUVXcxUEM5MGFYUnNaVDQ4Y0dGMGFDQmtQU0pOTVM0MUlEQm9NakZzTFRFdU9URWdNakV1TlRZelRERXhMamszTnlBeU5Hd3RPQzQxTmpRdE1pNDBNemhNTVM0MUlEQjZiVGN1TURNeElEa3VOelZzTFM0eU16SXRNaTQzTVRnZ01UQXVNRFU1TGpBd015NHlNeTB5TGpZeU1rdzFMalF4TWlBMExqUXhiQzQyT1RnZ09DNHdNV2c1TGpFeU5td3RMak15TmlBekxqUXlOaTB5TGpreExqZ3dOQzB5TGprMU5TMHVPREV0TGpFNE9DMHlMakV4U0RZdU1qUTRiQzR6TXlBMExqRTNNVXd4TWlBeE9TNHpOVEZzTlM0ek56a3RNUzQwTkRNdU56UTBMVGd1TVRVM1NEZ3VOVE14ZWlJdlBqd3ZjM1puUGc9PSIvPjx0ZXh0IHRyYW5zZm9ybT0ic2NhbGUoLjEpIiB4PSI1NDEuMjUiIHk9IjE3NSIgdGV4dExlbmd0aD0iNDQyLjUiIGZpbGw9IiNmZmYiIGZvbnQtd2VpZ2h0PSJib2xkIj5IVE1MNTwvdGV4dD48L2c+PC9zdmc+",
  },
  CSS: {
    name: "CSS",
    width: "107px",
    height: "43px",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzciIGhlaWdodD0iMjgiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iQ1NTMyI+PHRpdGxlPkNTUzM8L3RpdGxlPjxnIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PHJlY3Qgd2lkdGg9Ijc3IiBoZWlnaHQ9IjI4IiBmaWxsPSIjMTU3MmI2Ii8+PC9nPjxnIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJWZXJkYW5hLEdlbmV2YSxEZWphVnUgU2FucyxzYW5zLXNlcmlmIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBmb250LXNpemU9IjEwMCI+PGltYWdlIHg9IjkiIHk9IjciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0ozYUdsMFpTSWdjbTlzWlQwaWFXMW5JaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhScGRHeGxQa05UVXpNOEwzUnBkR3hsUGp4d1lYUm9JR1E5SWsweExqVWdNR2d5TVd3dE1TNDVNU0F5TVM0MU5qTk1NVEV1T1RjM0lESTBiQzA0TGpVMk5TMHlMalF6T0V3eExqVWdNSHB0TVRjdU1Ea2dOQzQwTVROTU5TNDBNU0EwTGpReGJDNHlNVE1nTWk0Mk1qSWdNVEF1TVRJMUxqQXdNaTB1TWpVMUlESXVOekUyYUMwMkxqWTBiQzR5TkNBeUxqVTNNMmcyTGpFNE1td3RMak0yTmlBekxqVXlNeTB5TGpreExqZ3dOQzB5TGprMU5pMHVPREV0TGpFNE9DMHlMakV4YUMweUxqWXhiQzR5T1NBekxqZzFOVXd4TWlBeE9TNHlPRGhzTlM0ek56TXRNUzQxTTB3eE9DNDFPU0EwTGpReE5Ib2lMejQ4TDNOMlp6ND0iLz48dGV4dCB0cmFuc2Zvcm09InNjYWxlKC4xKSIgeD0iNDg1IiB5PSIxNzUiIHRleHRMZW5ndGg9IjMzMCIgZmlsbD0iI2ZmZiIgZm9udC13ZWlnaHQ9ImJvbGQiPkNTUzM8L3RleHQ+PC9nPjwvc3ZnPg=="
  },
  JS: {
    name: "JS",
    width: "156.5px",
    height: "43px",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2LjUiIGhlaWdodD0iMjgiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iSkFWQVNDUklQVCI+PHRpdGxlPkpBVkFTQ1JJUFQ8L3RpdGxlPjxnIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PHJlY3Qgd2lkdGg9IjEyNi41IiBoZWlnaHQ9IjI4IiBmaWxsPSIjMzIzMzMwIi8+PC9nPjxnIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJWZXJkYW5hLEdlbmV2YSxEZWphVnUgU2FucyxzYW5zLXNlcmlmIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBmb250LXNpemU9IjEwMCI+PGltYWdlIHg9IjkiIHk9IjciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0lqWmpka1pqRmxJaUJ5YjJ4bFBTSnBiV2NpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OGRHbDBiR1UrU21GMllWTmpjbWx3ZER3dmRHbDBiR1UrUEhCaGRHZ2daRDBpVFRBZ01HZ3lOSFl5TkVnd1ZqQjZiVEl5TGpBek5DQXhPQzR5TnpaakxTNHhOelV0TVM0d09UVXRMamc0T0MweUxqQXhOUzB6TGpBd015MHlMamczTXkwdU56TTJMUzR6TkRVdE1TNDFOVFF0TGpVNE5TMHhMamM1TnkweExqRTBMUzR3T1RFdExqTXpMUzR4TURVdExqVXhMUzR3TkRZdExqY3dOUzR4TlMwdU5qUTJMamt4TlMwdU9EUWdNUzQxTVRVdExqWTJMak01TGpFeUxqYzFMalF5TGprM05pNDVJREV1TURNMExTNDJOellnTVM0d016UXRMalkzTmlBeExqYzFOUzB4TGpFeU5TMHVNamN0TGpReUxTNDBNRFF0TGpZd01TMHVOVGcyTFM0M09DMHVOak10TGpjd05TMHhMalEyT1MweExqQTJOUzB5TGpnek5DMHhMakF6Tkd3dExqY3dOUzR3T0RsakxTNDJOell1TVRZMUxURXVNekl1TlRJMUxURXVOekVnTVM0d01EVXRNUzR4TkNBeExqSTVNUzB1T0RFeElETXVOVFF4TGpVMk9TQTBMalEzTVNBeExqTTJOU0F4TGpBeUlETXVNell4SURFdU1qUTBJRE11TmpFMklESXVNakExTGpJMElERXVNVGN0TGpnM0lERXVOVFExTFRFdU9UWTJJREV1TkRFdExqZ3hNUzB1TVRndE1TNHlOaTB1TlRnMkxURXVOelUxTFRFdU16TTJiQzB4TGpneklERXVNRFV4WXk0eU1TNDBPQzQwTlM0Mk9Ea3VPREVnTVM0eE1Ea2dNUzQzTkNBeExqYzFOaUEyTGpBNUlERXVOalkySURZdU9EY3hMVEV1TURBMExqQXlPUzB1TURrdU1qUXRMamN3TlM0d056UXRNUzQyTld3dU1EUTJMakEyTjNwdExUZ3VPVGd6TFRjdU1qUTFhQzB5TGpJME9HTXdJREV1T1RNNExTNHdNRGtnTXk0NE5qUXRMakF3T1NBMUxqZ3dOU0F3SURFdU1qTXlMakEyTXlBeUxqTTJNeTB1TVRNNElESXVOekV4TFM0ek15NDJPRGt0TVM0eE9DNDJNREV0TVM0MU5qWXVORGd0TGpNNU5pMHVNVGsyTFM0MU9UY3RMalEyTmkwdU9ETXRMamcxTlMwdU1EWXpMUzR4TURVdExqRXhMUzR4T1RZdExqRXlOeTB1TVRrMmJDMHhMamd5TlNBeExqRXlOV011TXpBMUxqWXpMamMxSURFdU1UY3lJREV1TXpJMElERXVOVEUzTGpnMU5TNDFNU0F5TGpBd05DNDJOelVnTXk0eU1EY3VOREExTGpjNE15MHVNakkySURFdU5EVTRMUzQyT1RFZ01TNDRNVEV0TVM0ME1URXVOVEV0TGprekxqUXdNaTB5TGpBM0xqTTVOeTB6TGpNME5pNHdNVEl0TWk0d05UUWdNQzAwTGpFd09TQXdMVFl1TVRjNWJDNHdNRFF0TGpBMU5ub2lMejQ4TDNOMlp6ND0iLz48dGV4dCB0cmFuc2Zvcm09InNjYWxlKC4xKSIgeD0iNzMyLjUiIHk9IjE3NSIgdGV4dExlbmd0aD0iODI1IiBmaWxsPSIjZmZmIiBmb250LXdlaWdodD0iYm9sZCI+SkFWQVNDUklQVDwvdGV4dD48L2c+PC9zdmc+"
  },
  TS: {
    name: "TS",
    width: "156.5px",
    height: "43px",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2LjUiIGhlaWdodD0iMjgiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iVFlQRVNDUklQVCI+PHRpdGxlPlRZUEVTQ1JJUFQ8L3RpdGxlPjxnIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PHJlY3Qgd2lkdGg9IjEyNi41IiBoZWlnaHQ9IjI4IiBmaWxsPSIjMDA3YWNjIi8+PC9nPjxnIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJWZXJkYW5hLEdlbmV2YSxEZWphVnUgU2FucyxzYW5zLXNlcmlmIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBmb250LXNpemU9IjEwMCI+PGltYWdlIHg9IjkiIHk9IjciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0ozYUdsMFpTSWdjbTlzWlQwaWFXMW5JaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhScGRHeGxQbFI1Y0dWVFkzSnBjSFE4TDNScGRHeGxQanh3WVhSb0lHUTlJazB4TGpFeU5TQXdReTQxTURJZ01DQXdJQzQxTURJZ01DQXhMakV5TlhZeU1TNDNOVU13SURJekxqUTVPQzQxTURJZ01qUWdNUzR4TWpVZ01qUm9NakV1TnpWakxqWXlNeUF3SURFdU1USTFMUzQxTURJZ01TNHhNalV0TVM0eE1qVldNUzR4TWpWRE1qUWdMalV3TWlBeU15NDBPVGdnTUNBeU1pNDROelVnTUhwdE1UY3VNell6SURrdU56VmpMall4TWlBd0lERXVNVFUwTGpBek55QXhMall5Tnk0eE1URmhOaTR6T0NBMkxqTTRJREFnTUNBeElERXVNekEyTGpNMGRqSXVORFU0WVRNdU9UVWdNeTQ1TlNBd0lEQWdNQzB1TmpRekxTNHpOakVnTlM0d09UTWdOUzR3T1RNZ01DQXdJREF0TGpjeE55MHVNallnTlM0ME5UTWdOUzQwTlRNZ01DQXdJREF0TVM0ME1qWXRMakpqTFM0eklEQXRMalUzTXk0d01qZ3RMamd4T1M0d09EWmhNaTR4SURJdU1TQXdJREFnTUMwdU5qSXpMakkwTW1NdExqRTNMakV3TkMwdU15NHlNamt0TGpNNU15NHpOelJoTGpnNE9DNDRPRGdnTUNBd0lEQXRMakUwTGpRNVl6QWdMakU1Tmk0d05UTXVNemN6TGpFMU5pNDFNamt1TVRBMExqRTFOaTR5TlRJdU16QTBMalEwTXk0ME5EUnpMalF5TXk0eU56WXVOamsyTGpReFl5NHlOek11TVRNMUxqVTRNaTR5TnpRdU9USTJMalF4Tmk0ME55NHhPVGN1T0RreUxqUXdOeUF4TGpJMk5pNDJNamd1TXpjMExqSXlNaTQyT1RVdU5EY3pMamsyTXk0M05UTXVNalk0TGpJM09TNDBOekl1TlRrNExqWXhOQzQ1TlRjdU1UUXlMak0xT1M0eU1UUXVOemMyTGpJeE5DQXhMakkxTXlBd0lDNDJOVGN0TGpFeU5TQXhMakl4TFM0ek56TWdNUzQyTlRaaE15NHdNek1nTXk0d016TWdNQ0F3SURFdE1TNHdNVElnTVM0d09EVWdOQzR6T0NBMExqTTRJREFnTUNBeExURXVORGczTGpVNU5tTXRMalUyTmk0eE1pMHhMakUyTXk0eE9DMHhMamM1TGpFNFlUa3VPVEUySURrdU9URTJJREFnTUNBeExURXVPRFF0TGpFMk5DQTFMalUwTkNBMUxqVTBOQ0F3SURBZ01TMHhMalV4TWkwdU5Ea3pkaTB5TGpZellUVXVNRE16SURVdU1ETXpJREFnTUNBd0lETXVNak0zSURFdU1tTXVNek16SURBZ0xqWXlOQzB1TURNdU9EY3lMUzR3T1M0eU5Ea3RMakEyTGpRMU5pMHVNVFEwTGpZeU15MHVNalV1TVRZMkxTNHhNRGd1TWprdExqSXpOQzR6TnpNdExqTTRZVEV1TURJeklERXVNREl6SURBZ01DQXdMUzR3TnpRdE1TNHdPRGtnTWk0eE1pQXlMakV5SURBZ01DQXdMUzQxTXpjdExqVWdOUzQxT1RjZ05TNDFPVGNnTUNBd0lEQXRMamd3TnkwdU5EUTBJREkzTGpjeUlESTNMamN5SURBZ01DQXdMVEV1TURBM0xTNDBNelpqTFM0NU1UZ3RMak00TXkweExqWXdNaTB1T0RVeUxUSXVNRFV6TFRFdU5EQTFMUzQwTlMwdU5UVXpMUzQyTnpZdE1TNHlNakl0TGpZM05pMHlMakF3TlNBd0xTNDJNVFF1TVRJekxURXVNVFF4TGpNMk9TMHhMalU0TWk0eU5EWXRMalEwTVM0MU9DMHVPREEwSURFdU1EQTBMVEV1TURnNVlUUXVORGswSURRdU5EazBJREFnTUNBeElERXVORGN0TGpZeU9TQTNMalV6TmlBM0xqVXpOaUF3SURBZ01TQXhMamMzTFM0eU1ERjZiUzB4TlM0eE1UTXVNVGc0YURrdU5UWXpkakl1TVRZMlNEa3VOVEEyZGprdU5qUTJTRFl1TnpnNWRpMDVMalkwTmtnekxqTTNOWG9pTHo0OEwzTjJaejQ9Ii8+PHRleHQgdHJhbnNmb3JtPSJzY2FsZSguMSkiIHg9IjczMi41IiB5PSIxNzUiIHRleHRMZW5ndGg9IjgyNSIgZmlsbD0iI2ZmZiIgZm9udC13ZWlnaHQ9ImJvbGQiPlRZUEVTQ1JJUFQ8L3RleHQ+PC9nPjwvc3ZnPg=="
  },
  SOCKETIO: {
    name: "SOCKETIO",
    width: "146.25px",
    height: "43px",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTE2LjI1IiBoZWlnaHQ9IjI4IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlNPQ0tFVC5JTyI+PHRpdGxlPlNPQ0tFVC5JTzwvdGl0bGU+PGcgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cmVjdCB3aWR0aD0iMTE2LjI1IiBoZWlnaHQ9IjI4IiBmaWxsPSJibGFjayIvPjwvZz48ZyBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iVmVyZGFuYSxHZW5ldmEsRGVqYVZ1IFNhbnMsc2Fucy1zZXJpZiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgZm9udC1zaXplPSIxMDAiPjxpbWFnZSB4PSI5IiB5PSI3IiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNKM2FHbDBaWE50YjJ0bElpQnliMnhsUFNKcGJXY2lJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4ZEdsMGJHVStVMjlqYTJWMExtbHZQQzkwYVhSc1pUNDhjR0YwYUNCa1BTSk5NVEV1T1RNMk1pNHdNVE0zWVRFeUxqRTJPVFFnTVRJdU1UWTVOQ0F3SURBd0xUSXVPVGMwT0M0ek56aEROQzR5T0RFMklERXVOVFUwTnk0MU5qYzRJRFV1TnprME5DNHdPVEU0SURFd0xqWXdNVEpqTFM0MU9TQTBMalUwT0RnZ01TNDNNRGM1SURrdU1qZzFOaUExTGpZME16Y2dNVEV1TmpNME5TQXpMamcyTURnZ01pNDBNVGM1SURrdU1Ea3lOaUF5TGpNeE9Ua2dNVEl1T0Rjek5DMHVNakl6SURNdU16azJPUzB5TGpJd05pQTFMalV4TVRndE5pNHlNamMzSURVdU16ZzFPQzB4TUM0eU9EUTFMUzR3TlRndE5DNHdNVFU1TFRJdU16RXROeTQ1TVRZM0xUVXVOelU0T0MwNUxqazNPVFpETVRZdU16VTBMalU0TnpZZ01UUXVNVFF6TVM0d01EUTNJREV4TGprek5qSXVNREV6TjNwdExTNHdOak1nTVM0Mk9UWmpOQzQ1TkRRNExTNHdNRGNnT1M0M09EZzJJRE11T0RFek55QXhNQzR5T0RFMUlEZ3VPVEkwTlM0NU5EVWdOUzQyTlRrM0xUTXVOelV5T0NBeE1TNDBNVEkxTFRrdU5EZzNOU0F4TVM0MU56azFMVFV1TkRVek9DNDFORFF0TVRBdU56STBOUzAwTGpBM09UZ3RNVEF1T0RjNU5TMDVMalUxTmpZdExqUXdOeTAwTGpRek16Z2dNaTQxTVRVNUxUZ3VPRE0wTmlBMkxqWTVOemN0TVRBdU1qazVOV0U1TGpFeE1qWWdPUzR4TVRJMklEQWdNREV6TGpNNE56Z3RMalkwTjNwdE5TNHdPVEE0SURNdU1qSTBPR010TWk0Mk9EWTVJREl1TURnME9TMDFMakkxT1RnZ05DNHpNRGM0TFRjdU9EZzROaUEyTGpRMU5qY2dNUzR5TURJNUxqQXhOeUF5TGpReE1UZ3VNREUySURNdU5qSXdPQzR3TVNBeExqUXhMVEl1TVRZMUlESXVPRFU0T1MwMExqTXdNRGdnTkM0eU5qYzRMVFl1TkRZMk4zcHRMVFV1TmpZME55QTNMalkxTXpaakxURXVOREVnTWk0eE5qWXRNaTQ0TmlBMExqTXdPRGd0TkM0eU5qazVJRFl1TkRjek55QXlMalk1TXkweUxqQTNPVGtnTlM0eU5UUTRMVFF1TXpFNU9DQTNMamt3TVRjdE5pNDBOVFUzWVRJMU5TNDBNVE15SURJMU5TNDBNVE15SURBZ01EQXRNeTQyTXpFNExTNHdNVGg2SWk4K1BDOXpkbWMrIi8+PHRleHQgdHJhbnNmb3JtPSJzY2FsZSguMSkiIHg9IjY4MS4yNSIgeT0iMTc1IiB0ZXh0TGVuZ3RoPSI3MjIuNSIgZmlsbD0iI2ZmZiIgZm9udC13ZWlnaHQ9ImJvbGQiPlNPQ0tFVC5JTzwvdGV4dD48L2c+PC9zdmc+",
  },
  NODEJS: {
    name: "NODEJS",
    width: "130.73px",
    height: "43px",
    src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  },
  MARIADB: {
    name: "MARIADB",
    width: "136.75px",
    height: "43px",
    src: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
  },
  WORDPRESS: {
    name: "WORDPRESS",
    width: "157.25px",
    height: "43px",
    src: "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white",
  },
  BOOTSTRAP: {
    name: "BOOTSTRAP",
    width: "153.25px",
    height: "43px",
    src: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  },
  REACTJS: {
    name: "REACTJS",
    width: "116.25px",
    height: "43px",
    src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  VITE: {
    name: "VITE",
    width: "105px",
    height: "43px",
    src: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
  },
  NGINX: {
    name: "NGINX",
    width: "118.25px",
    height: "43px",
    src: "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
  },
  KUBERNETES: {
    name: "KUBERNETES",
    width: "160.5px",
    height: "43px",
    src: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
  },
  GO: {
    name: "GO",
    width: "92.5px",
    height: "43px",
    src: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  },
  RUST: {
    name: "RUST",
    width: "108px",
    height: "43px",
    src: "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
  },
  PYTHON: {
    name: "PYTHON",
    width: "127.5px",
    height: "43px",
    src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  },
  TENSORFLOW: {
    name: "TENSORFLOW",
    width: "164.5px",
    height: "43px",
    src: "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
  },
  SHELL: {
    name: "SHELL",
    width: "169px",
    height: "43px",
    src: "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
  },
  ALPINE: {
    name: "ALPINE",
    width: "170px",
    height: "43px",
    src: "https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white",
  },
  DOCKER: {
    name: "DOCKER",
    width: "127.5px",
    height: "43px",
    src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  },
  REACTNATIVE: {
    name: "REACTNATIVE",
    width: "171px",
    height: "43px",
    src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  UBUNTU: {
    name: "UBUNTU",
    width: "128.5px",
    height: "43px",
    src: "https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
  },
  LINUX: {
    name: "LINUX",
    width: "116.25px",
    height: "43px",
    src: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
  },
  LINODE: {
    name: "LINODE",
    width: "104.5px",
    height: "43px",
    src: "https://img.shields.io/badge/linode-%2300A95C.svg?style=for-the-badge&logo=linode&logoColor=white",
  },
  CLOUDFLARE: {
    name: "CLOUDFLARE",
    width: "159.5px",
    height: "43px",
    src: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white",
  },
  GITHUBACTIONS: {
    name: "GITHUBACTIONS",
    width: "190.5px",
    height: "43px",
    src: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
  },
  GITHUB: {
    name: "GITHUB",
    width: "125.5px",
    height: "43px",
    src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
  },
  GIT: {
    name: "GIT",
    width: "97.75px",
    height: "43px",
    src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  },
  MARKDOWN: {
    name: "MARKDOWN",
    width: "153px",
    height: "43px",
    src: "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
  },
  JEST: {
    name: "JEST",
    width: "105px",
    height: "43px",
    src: "https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white",
  },
  ESLINT: {
    name: "ESLINT",
    width: "122.5px",
    height: "43px",
    src: "https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white",
  },
};

export default BadgesList;
