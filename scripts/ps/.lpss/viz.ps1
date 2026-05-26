[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $InstanceName
)

if ([string]::IsNullOrWhiteSpace($InstanceName)) {
    $InstanceName = [Guid]::NewGuid().ToString('N').Substring(0, 5)
}
Invoke-LpssBinary -Name viz -Arguments @($InstanceName)
